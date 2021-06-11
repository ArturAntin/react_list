import * as React from "react";
import { FlatList, Image, StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "../components/Themed";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class TabOneScreen extends React.Component {
  state = {
    isLoading: true,
    data: null,
  };

  componentDidMount() {
    this.loadPeople();
  }

  loadPeople() {
    this.setState({ isLoading: true });
    fetch(`https://randomuser.me/api/?results=1000&nat=de&noinfo`).then((res) =>
      res.json().then((json) => {
        this.setState({ data: json.results, isLoading: false });
      })
    );
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
                onPress={() => this.loadPeople()}
              />
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.data}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 22, padding: 4 }}
                  >
                    {item.name.first} {item.name.last}
                  </Text>

                  <Text style={{ fontWeight: "300", fontSize: 18, padding: 4 }}>
                    Username: {item.login.username}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      padding: 4,
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 80, padding: 4 }}
                      source={{
                        uri: item.picture.large,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignContent: "center",
                      }}
                    >
                      <Text>
                        {item.location.street.name}{" "}
                        {item.location.street.number}
                      </Text>
                      <Text>
                        {item.location.postcode}
                        {", "}
                        {item.location.city.substring(0, 20)}
                        {item.location.city.length > 20 ? "..." : ""}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.separator} />
                </View>
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
    padding: 12,
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
  },

  separator: {
    marginVertical: 15,
    height: 1,
    width: "80%",
  },
});
