import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Preferences = () => {
  return (
    <View style={styles.preferences}>
      <Text style={styles.preferences1}>Preferences</Text>
      <View style={styles.button} />
      <Text style={styles.findMyRoommate}>Find my Roommate</Text>
      <View style={[styles.dropdownBox, styles.dropdownLayout]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Room Type</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>Single</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Double</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Studio</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]} />
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsPosition}>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>Single</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Double</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Studio</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Single</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Double</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Studio</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Single</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Double</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Studio</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dropdownBox1, styles.dropdownLayout]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Pets</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>No</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Yes</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]} />
          <View style={[styles.label4, styles.labelLayout]} />
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsPosition}>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>No</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Yes</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>No</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Yes</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dropdownBox2, styles.dropdownFlexBox]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus2.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Lease Duration</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>Month-to-month</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>6 months</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>12 months</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]} />
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns2.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsPosition}>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus3.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>Month-to-month</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>6 months</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>12 months</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Month-to-month</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>6 months</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>12 months</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Month-to-month</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>6 months</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>12 months</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dropdownBox3, styles.dropdownFlexBox]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus2.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Housing Type</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>Dorm</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Apartment</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>House</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]} />
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns2.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsPosition}>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
               // source={require("../assets/iconsregularplus3.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>Dorm</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Apartment</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>House</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
              //  source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
              //  source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Dorm</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Apartment</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>House</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
              //  source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
              //  source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Dorm</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Apartment</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>House</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dropdownBox4, styles.dropdownFlexBox]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Smoking/Drinking</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>Non-smoker/Non-drinker</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Non-smoker/drinker</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Smoker/Drinker</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]}>
            <Text style={styles.single}>Smoker/Non-drinker</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]} />
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={[styles.itemsList4, styles.itemsPosition]}>
            <View style={[styles.itemHover11, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
              //  source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
               // source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
               // source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
               // source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
               // source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={styles.labelLayout}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
               // source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dropdownBox5, styles.dropdownFlexBox]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus2.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Desired Location</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>On-campus</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Near-campus</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Off-campus</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]} />
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns2.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsPosition}>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus3.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>On-campus</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Near-campus</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Off-campus</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>On-campus</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Near-campus</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Off-campus</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>On-campus</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Near-campus</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Off-campus</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]} />
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Label5</Text>
              </View>
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dropdownBox6, styles.dropdownFlexBox]}>
        <View style={[styles.header, styles.headerBorder]}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
            contentFit="cover"
            //source={require("../assets/iconsregularplus.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.roomType}>Lease Start Date</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={styles.single}>Non-smoker/Non-drinker</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Non-smoker/drinker</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={styles.single}>Smoker/Drinker</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]}>
            <Text style={styles.single}>Smoker/Non-drinker</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]} />
          <Image
            style={styles.iconsregularchevronLayout}
            contentFit="cover"
            //source={require("../assets/iconsregularchevrondowns.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={[styles.itemsList4, styles.itemsPosition]}>
            <View style={[styles.itemHover11, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[
                  styles.iconsregularplus,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularplus1.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={styles.single}>Non-smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Non-smoker/drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={styles.single}>Smoker/Drinker</Text>
              </View>
              <View style={styles.labelLayout}>
                <Text style={styles.single}>Smoker/Non-drinker</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]} />
              <Image
                style={[
                  styles.iconsregularchevronDownS1,
                  styles.iconsregularchevronLayout,
                ]}
                contentFit="cover"
                //source={require("../assets/iconsregularchevrondowns1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.header7, styles.headerBorder]}>
        <Image
          style={[styles.iconsregularplus, styles.iconsregularchevronLayout]}
          contentFit="cover"
          //source={require("../assets/iconsregularplus2.png")}
        />
        <View style={styles.menuLabel}>
          <Text style={styles.roomType}>Max Budget</Text>
        </View>
        <View style={[styles.label1, styles.labelLayout2]}>
          <Text style={styles.single}>Non-smoker/Non-drinker</Text>
        </View>
        <View style={[styles.label2, styles.labelLayout1]}>
          <Text style={styles.single}>Non-smoker/drinker</Text>
        </View>
        <View style={[styles.label2, styles.labelLayout1]}>
          <Text style={styles.single}>Smoker/Drinker</Text>
        </View>
        <View style={[styles.label4, styles.labelLayout]}>
          <Text style={styles.single}>Smoker/Non-drinker</Text>
        </View>
        <View style={[styles.label2, styles.labelLayout1]} />
        <Image
          style={styles.iconsregularchevronLayout}
          contentFit="cover"
          //source={require("../assets/iconsregularchevrondowns2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownLayout: {
    height: 43,
    width: 281,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  headerBorder: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "space-between",
    borderWidth: 1.3,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  iconsregularchevronLayout: {
    height: 20,
    width: 20,
  },
  labelLayout2: {
    height: 18,
    width: 45,
  },
  labelLayout1: {
    width: 49,
    height: 18,
  },
  labelLayout: {
    width: 50,
    height: 18,
  },
  itemFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
  },
  dropdownFlexBox: {
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  itemsPosition: {
    justifyContent: "flex-end",
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    bottom: -218,
    right: "0%",
    left: "0%",
    backgroundColor: Color.white,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  preferences1: {
    top: 24,
    left: 42,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    color: Color.colorBrown,
    textAlign: "center",
    width: 231,
    height: 64,
    fontFamily: FontFamily.sFPro,
    fontWeight: "500",
    position: "absolute",
  },
  button: {
    height: "7.31%",
    width: "53.13%",
    top: "88.41%",
    right: "23.44%",
    bottom: "4.28%",
    left: "23.44%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  findMyRoommate: {
    top: 509,
    left: 90,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconsregularplus: {
    display: "none",
  },
  roomType: {
    letterSpacing: 0.5,
    color: Color.black,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFPro,
    fontWeight: "500",
  },
  menuLabel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  single: {
    top: "0%",
    fontSize: FontSize.dropMenuMenu_size,
    letterSpacing: 0.4,
    fontFamily: FontFamily.dropMenuMenu,
    left: "0%",
    color: Color.black,
    lineHeight: 18,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  label1: {
    display: "none",
  },
  label2: {
    display: "none",
  },
  label4: {
    display: "none",
  },
  header: {
    zIndex: 1,
    alignSelf: "stretch",
  },
  iconsregularchevronDownS1: {
    opacity: 0,
  },
  itemHover: {
    zIndex: 2,
  },
  itemHover1: {
    zIndex: 1,
  },
  itemHover2: {
    zIndex: 0,
  },
  itemsFrame: {
    height: 1,
    zIndex: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dropdownBox: {
    top: 76,
  },
  dropdownBox1: {
    top: 377,
  },
  dropdownBox2: {
    top: 117,
    height: 60,
    left: 20,
    width: 280,
  },
  dropdownBox3: {
    top: 157,
    height: 80,
    left: 20,
    width: 280,
  },
  itemHover11: {
    zIndex: 3,
  },
  itemsList4: {
    height: 168,
  },
  dropdownBox4: {
    top: 222,
    height: 49,
    left: 20,
    width: 280,
  },
  dropdownBox5: {
    top: 277,
    height: 42,
    left: 20,
    width: 280,
  },
  dropdownBox6: {
    top: 330,
    left: 21,
    height: 39,
  },
  header7: {
    top: 427,
    left: 19,
    width: 283,
    height: 44,
    position: "absolute",
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "space-between",
    borderWidth: 1.3,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
  },
  preferences: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },
});

export default Preferences;
