import React from "react";
import { Image } from "react-native";
import { ProfileStyles } from "./ProfileStyle";
import { memo } from "react";

const ProfilePicture = ({ user }) => {
    return (
        <>
            {(user?.image || user?.picture_url) ? <Image
                source={{
                    uri: user?.image || user?.picture_url,
                }}
                style={ProfileStyles.image}
            /> : null}
            
        </>
    );
};

export default memo(ProfilePicture);
