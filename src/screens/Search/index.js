import React, { useState, useEffect } from 'react';
import SearchComponent from '../../common-components/Search';
import { 
  SearchWrapper, 
  Wrapper, 
  TitleWrapper, 
  Title, 
  CardWrapper, 
  Card, 
  Tag, 
  TagWrapper, 
  CardDevName, 
  CardImage, 
  CardStateName, 
  ButtonCard 
} from './styled';
import devs from '../../database/devs.json'


const Search = () => {
  const [list, setList] = useState(devs);

  console.log(devs)


  const handleDevCep = () => 'São Paulo, SP'

  return (
    <SearchWrapper>
      <Wrapper>
        <TitleWrapper>
          <Title>Devs</Title>
          <SearchComponent />
        </TitleWrapper>

        <CardWrapper>
          {
            devs && devs.map(dev => (
              <Card key={dev.id}>
                <CardImage avatar={dev.avatar} />

                <CardDevName><strong>{dev.name}</strong> {dev.age ? `, ${dev.age}` : null}</CardDevName>
                {dev.cep && <CardStateName>{handleDevCep(dev.cep)}</CardStateName> }

                { dev.skills && 
                <TagWrapper>
                  {dev.skills.map(skill => <Tag skill={skill}>{skill}</Tag>)}
                </TagWrapper> }

                <ButtonCard to={`/details/${dev.id}`}>Conhecer esta fera!</ButtonCard>
              </Card>
            ))
            
          }
        </CardWrapper>
      </Wrapper>
    </SearchWrapper>
  )
}

export default Search