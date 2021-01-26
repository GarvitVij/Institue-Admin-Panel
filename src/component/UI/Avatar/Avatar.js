import React from 'react';
import MUIAvatar from '../../MUI/Avatar/Avatar'

const Avatar = (props) => (
    <MUIAvatar
        color={process.env.REACT_APP_ICON_COLOR}
        margin={"5vh 0"}
    />
)

export default Avatar