import Toast from "react-native-root-toast";

class AndroidToasts {

    simpleToast = (msg) => {
      Toast.show(msg, {duration: 500});
    };
};

export default AndroidToasts;
