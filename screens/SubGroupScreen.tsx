import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../App';
import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {useSubGroupList} from '../queries/SubGroup';

type Props = StackScreenProps<HomeStackParamList, 'Subgroup'>;

const SubGroupScreen = ({navigation, route}: Props) => {
  const {group_title, group_id} = route.params;
  const subgroups = useSubGroupList(group_id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${group_title}`,
    });
  }, [navigation, group_title]);

  return (
    <View>
      {subgroups.data?.map(subgroup => (
        <View>
          <Pressable
            onPress={() =>
              navigation.navigate('Level', {
                group_id: group_id,
                group_title: group_title,
                subgroup_id: subgroup.id,
                subgroup_title: subgroup.title,
              })
            }>
            <Text>{subgroup.title}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default SubGroupScreen;
