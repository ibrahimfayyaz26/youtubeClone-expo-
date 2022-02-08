import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { Audio, Video } from "expo-av";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

const Shorts = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        status.isPlaying
          ? video.current.pauseAsync()
          : video.current.playAsync()
      }
      style={styles.container}
    >
      <View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode="cover"
          isLooping
          shouldPlay={true}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.uiContainer}>
          <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Entypo
                name={"dots-three-horizontal"}
                size={35}
                color={"white"}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <AntDesign name={"like1"} size={30} color={"white"} />
              <Text style={styles.statsLabel}>11</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <AntDesign name={"dislike1"} size={30} color="white" />
              <Text style={styles.statsLabel}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <MaterialIcons name={"comment"} size={30} color="white" />
              <Text style={styles.statsLabel}>33</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Fontisto name={"share-a"} size={25} color="white" />
              <Text style={styles.statsLabel}>Share</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <View style={{ width: "83%" }}>
              <Text style={styles.description}>
                Good video need more efortGood video need more efort
              </Text>

              <View style={styles.songRow}>
                <Image
                  style={styles.songImage1}
                  source={{
                    uri: "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
                  }}
                />
                <Text style={styles.songName}>Boorsa</Text>
              </View>
            </View>
            <Image
              style={styles.songImage}
              source={{
                uri: "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Shorts;
