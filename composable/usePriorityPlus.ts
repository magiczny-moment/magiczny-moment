import { onMounted, ref, type VNode } from 'vue';
import { debounce, cloneDeep } from 'lodash-es';
import { useSplitArray } from './useGenHumanReadableId';

const calculateChildrensSpaceTakenAndFindWhereIsSplitPoint = (childrens, menuContainerGap, containerWidth) => {
  let splitChildrenIndex

  const childrensSpaceTaken = childrens.reduce((acc, child, index) => {
    const childCompStyles = window.getComputedStyle(child);
    console.log("🚀 ~ childrensSpaceTaken ~ childCompStyles.getPropertyValue('margin-right'):", childCompStyles.getPropertyValue('margin-right'))
    const childMargins = parseInt(childCompStyles.getPropertyValue('margin-right').match(/\d+/)[0]) + parseInt(childCompStyles.getPropertyValue('margin-left').match(/\d+/)[0]);
    const result = acc + child.offsetWidth + childMargins + menuContainerGap;

    if (acc < containerWidth && result > containerWidth) {
      splitChildrenIndex = index;
    }
    return result;
  }, 0) - menuContainerGap;
  const result = [childrensSpaceTaken, splitChildrenIndex]
  return result
}

export default (menuContainer: VNode, childrensInput: VNode[]) => {
  const widthForDispalingChildrens = ref(0);
  const visibleArray = ref(), asideArray = ref();
  onMounted(() => {
    const childrens = cloneDeep(toRaw(childrensInput.value));
/*     const childrens = []
    childrensInput.value.forEach(element => {
      childrens.push(element.cloneNode())
    });
    childrens.forEach(element => {
      element.classList.remove('hidden');
    }); */


    const menuContainerCompStyles = window.getComputedStyle(menuContainer.value);
    const menuContainerPaddingHorizontal = Number(menuContainerCompStyles.getPropertyValue('padding-left').match(/\d+/)[0]) + Number(menuContainerCompStyles.getPropertyValue('padding-right').match(/\d+/)[0]);
    const menuContainerGap = Number(menuContainerCompStyles.getPropertyValue('row-gap').match(/\d+/)[0]);

    widthForDispalingChildrens.value = menuContainer.value.offsetWidth - menuContainerPaddingHorizontal;


    const [childrensSpaceTaken, splitChildrenIndex] = calculateChildrensSpaceTakenAndFindWhereIsSplitPoint(childrens, menuContainerGap, widthForDispalingChildrens.value)


    const prepareVisibleArray = childrens.slice(0, splitChildrenIndex);
    /* prepareVisibleArray.forEach(element => {
      element.classList.remove('hidden');
    }); */
    visibleArray.value = prepareVisibleArray
    asideArray.value = childrens.slice(splitChildrenIndex);


    window.addEventListener('resize', debounce(() => {
      widthForDispalingChildrens.value = menuContainer.value.offsetWidth - menuContainerPaddingHorizontal;

      const [childrensSpaceTaken, splitChildrenIndex] = calculateChildrensSpaceTakenAndFindWhereIsSplitPoint(childrens, menuContainerGap, widthForDispalingChildrens.value)

      visibleArray.value = childrens.slice(0, splitChildrenIndex);
      asideArray.value = childrens.slice(splitChildrenIndex);

    }, 50))

  })
  return { visibleArray, asideArray }
}