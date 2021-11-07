import styled from "styled-components";

const HeaderWrap = styled.div`
  height: 75px;
  background-color: #242424;
  border-bottom: 5px solid #c20c19;
  .wrap {
    display: flex;
    justify-content: space-between;
    .wrap-left {
      display: flex;
      .logo {
        display: block;
        height: 70px;
        width: 157px;
        margin-right: 20px;
        background-position: 0 0;
      }
      .nav {
        a {
          position: relative;
          display: inline-block;
          line-height: 70px;
          font-size: 14px;
          color: #cccccc;
          padding: 0 19px;
          text-decoration: none;
          &.active,
          &:hover {
            color: #ffffff;
            background-color: #000000;
          }
          &.active::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            border-style: solid;
            border-color: transparent transparent #c20c19 transparent;
            border-width: 0 6px 7px 6px;
          }
        }
      }
    }
    .wrap-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .input-wrapper {
        width: 158px;
        height: 32px;
        border-radius: 16px;
        &:hover,&:focus {
          border: none;
          box-shadow: none;
        }
        .anticon-search {
          font-size: 12px;
          color: #9b9b9b;
        }
        .ant-input {
          color: #333;
          font-size: 12px;
        
        }
      }
      .btn{
        border: 1px solid #4F4F4F;
        height: 32px;
        line-height: 30px;
        color: #ccc;
        font-size: 12px;
        border-radius: 16px;
        padding: 0 16px;
        background-color: transparent;
        margin-left: 12px;
        cursor: pointer;
        &:hover,&:active{
          border-color: #ffffff;
          color: #ffffff;
        }
      }
    }
  }
`;

export default HeaderWrap;
