import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getTotallUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSuperSelector } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
   }

   render() {
      return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      toggleFollowingProgress={this.props.toggleFollowingProgress}
      followingInProgress={this.props.followingInProgress}
      />
      </>
   }
   
}


let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotallUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
};


export default compose(
withAuthRedirect,
connect(mapStateToProps, 
{follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers}))
(UsersContainer)