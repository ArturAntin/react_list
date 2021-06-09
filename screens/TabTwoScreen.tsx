import * as React from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "../components/Themed";

export default class TabTwoScreen extends React.Component {
  state = {
    isLoading: true,
    data: null,
  };

  data = [
    require("../assets/images/cat0.jpg"),
    require("../assets/images/cat1.jpg"),
    require("../assets/images/cat2.jpg"),
    require("../assets/images/cat3.jpg"),
    require("../assets/images/cat4.jpg"),
    require("../assets/images/cat5.jpg"),
    require("../assets/images/cat6.jpg"),
    require("../assets/images/cat7.jpg"),
    require("../assets/images/cat8.jpg"),
    require("../assets/images/cat9.jpg"),
  ];

  componentDidMount() {
    this.loadCats();
  }

  loadCats() {
    this.setState({
      isLoading: false,
      data: this.shuffle(this.data),
    });
  }

  shuffle(a: any[]) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View style={styles.container}>
            <Text>Daten werden geladen...</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                padding: 4,
              }}
            >
              <Button
                type="clear"
                icon={<Icon name="refresh" size={26} color={"grey"} />}
                onPress={() => this.loadCats()}
              />
            </View>
            <FlatList
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              data={this.state.data}
              renderItem={({ item }) => (
                <Image
                  style={{ height: 200, width: 150, margin: 12 }}
                  source={item}
                />
              )}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
