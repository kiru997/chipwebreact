import { combineReducers } from 'redux';
import ReCategoryProject from './ReCategoryProject';
import ReProject from './ReProject';
import RePost from './RePost';
import ReUser from './ReUser';
import ReDetailPost from './ReDetailPost';
import ReDetailProject from './ReDetailProject';
import RePage from './RePage';
import ReRerender from './ReRerender';
const appReducers = combineReducers({
    ReCategoryProject,
    ReProject,
    RePost,
    ReUser,
    ReDetailPost,
    ReDetailProject,
    RePage,
    ReRerender
});

export default appReducers;