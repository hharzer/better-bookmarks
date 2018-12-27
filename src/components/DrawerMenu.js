//@flow

import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { queryByTag } from "../actions/bookmarks";
import { setFilter } from "../actions/filters";
import { signOut } from "../actions/auth";
import { toggleDrawerMenu } from "../actions/menuState";

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
`;

const StyledMenu = styled.div`
  background-color: white;
  height: 100%;
  width: 230px;
  overflow: scroll;
`;

const MenuHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const FilterButton = styled.button`
  display: inline-block;
  width: 100%;
  border: none;
  padding: 0.7rem;
  margin: 0 0 3px 0;
  text-decoration: none;
  background: white;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    color: #1665d8;
    background-color: rgba(84, 147, 245, 0.1);
  }
  &:active {
    transform: scale(0.99);
    background-color: #1665d8;
    color: white;
  }
`;

type Props = {
  queryByTag: Function,
  setFilter: Function,
  auth: Object,
  toggleDrawerMenu: Function,
  tags: Array<Object>,
  signOut: Function
};

class DrawerMenu extends Component<Props> {
  handleTagQuery = (query: string) => {
    this.props.queryByTag(this.props.auth.uid, query);
    this.props.setFilter(query);
    this.props.toggleDrawerMenu();
  };

  render() {
    return (
      <Backdrop>
        <StyledMenu>
          <MenuHeader>
            <button className="btn btn-sm" onClick={this.props.signOut}>
              signout
            </button>
            <div
              class="btn btn-action btn-sm"
              onClick={this.props.toggleDrawerMenu}
            >
              <i class="icon icon-cross" />
            </div>
          </MenuHeader>

          {this.props.tags.map(item => (
            <FilterButton
              key={item.id}
              onClick={e => this.handleTagQuery(item.title)}
            >
              {item.title}
            </FilterButton>
          ))}
        </StyledMenu>
      </Backdrop>
    );
  }
}

const mapStateToProps = ({ auth, tags }) => {
  return { auth, tags };
};

export default connect(
  mapStateToProps,
  { setFilter, queryByTag, toggleDrawerMenu, signOut }
)(DrawerMenu);
