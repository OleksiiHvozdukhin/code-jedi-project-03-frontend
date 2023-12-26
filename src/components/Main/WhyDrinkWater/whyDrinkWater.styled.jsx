import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 4px 14px 0px #407BFF4D;
  background: #ECF2FF;
  width: 494px;
  border-radius: 10px;
  margin-left: 81px;
  margin-top: 34px;
  padding: 32px 24px
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const List = styled.ul`
  padding-left: 20px;

`;

const ListItem = styled.li`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;

  &::marker {
    color: #407BFF;
  }

`;


export {
  Container, Title, List, ListItem
};
