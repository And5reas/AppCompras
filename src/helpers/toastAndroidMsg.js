import { ToastAndroid } from "react-native";

class AndroidToasts {

    simpleToast = (msg) => {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    };

    showToastWithGravity = (msg) => {
        ToastAndroid.showWithGravity(msg,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        );
    };

    showToastWithGravityAndOffset = (msg) => {
        ToastAndroid.showWithGravityAndOffset(msg,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      };
};

export default AndroidToasts;
