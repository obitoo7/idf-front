import React from 'react'
import CategoryCard from '../components/CategoryCard/CategoryCard'
import { DietContainer, DietCategoryContainer } from '../styledcomponents/_Diet'

function Diet() {
  return (
    <DietContainer>
      <DietCategoryContainer>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      </DietCategoryContainer>
    </DietContainer>
  )
}

export default Diet