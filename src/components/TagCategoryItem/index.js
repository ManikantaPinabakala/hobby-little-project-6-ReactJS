import {TagListItem, TagButton} from './styledComponents'

const TagCategoryItem = props => {
  const {tagDetails, setCategoryId, isActive} = props
  const {optionId, displayText} = tagDetails

  const onClickCategory = () => {
    setCategoryId(optionId)
  }

  return (
    <TagListItem>
      <TagButton type="button" onClick={onClickCategory} isActive={isActive}>
        {displayText}
      </TagButton>
    </TagListItem>
  )
}

export default TagCategoryItem
