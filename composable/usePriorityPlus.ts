import { onMounted, onUpdated, ref, watch, type VNode } from 'vue';
import { debounce, cloneDeep } from 'lodash-es';

const calculateChildrensSpaceTakenAndFindWhereIsSplitPoint = (childrens, menuContainerGap, containerWidth,menuButton) => {
  let splitChildrenIndex

  const childrensSpaceTaken = childrens.reduce((acc, child, index) => {
    const childCompStyles = window.getComputedStyle(child);
    const childMargins = parseInt(childCompStyles.getPropertyValue('margin-right').match(/\d+/)[0]) + parseInt(childCompStyles.getPropertyValue('margin-left').match(/\d+/)[0]);
    const menuButtonCompStyles = window.getComputedStyle(menuButton);
    const menuButtonMargins = parseInt(menuButtonCompStyles.getPropertyValue('margin-right').match(/\d+/)[0]) + parseInt(menuButtonCompStyles.getPropertyValue('margin-left').match(/\d+/)[0]);
    const result = acc + child.offsetWidth + childMargins + (index == 0 ? 0 : menuContainerGap) + (index == 0 ? menuButton.offsetWidth + menuButtonMargins : 0);

    if (acc < containerWidth && result > containerWidth) {
      splitChildrenIndex = index;
    }
    else if (acc < containerWidth && result < containerWidth) {
      splitChildrenIndex = childrens.length;
    }
    return result;
  }, 0);
  const result = [childrensSpaceTaken, splitChildrenIndex]
  return result
}

export default (menuContainer: VNode, childrensInput: VNode[] , menuButton: VNode) => {
  const visibleArray = ref(), asideArray = ref();
  const calculateVisibleAndHidden = () => {
    const widthForDispalingChildrens = ref(0);
    const childrens = cloneDeep(toRaw(childrensInput.value));
    
    const menuContainerCompStyles = window.getComputedStyle(menuContainer.value);
    const menuContainerPaddingHorizontal = Number(menuContainerCompStyles.getPropertyValue('padding-left').match(/\d+/)[0]) + Number(menuContainerCompStyles.getPropertyValue('padding-right').match(/\d+/)[0]);
    const menuContainerGap = Number(menuContainerCompStyles.getPropertyValue('row-gap').match(/\d+/)[0]);

    widthForDispalingChildrens.value = menuContainer.value.offsetWidth - menuContainerPaddingHorizontal;


    const [_, splitChildrenIndex] = calculateChildrensSpaceTakenAndFindWhereIsSplitPoint(childrens, menuContainerGap, widthForDispalingChildrens.value, menuButton.value);


    const prepareVisibleArray = childrens.slice(0, splitChildrenIndex);

    visibleArray.value = prepareVisibleArray
    asideArray.value = childrens.slice(splitChildrenIndex);


    window.addEventListener('resize', debounce(() => {
      widthForDispalingChildrens.value = menuContainer.value.offsetWidth - menuContainerPaddingHorizontal;

      const [_, splitChildrenIndex] = calculateChildrensSpaceTakenAndFindWhereIsSplitPoint(childrens, menuContainerGap, widthForDispalingChildrens.value, menuButton.value)

      visibleArray.value = childrens.slice(0, splitChildrenIndex);
      asideArray.value = childrens.slice(splitChildrenIndex);

    }, 50))

  }
  onMounted(calculateVisibleAndHidden)
  return { visibleArray, asideArray }
}