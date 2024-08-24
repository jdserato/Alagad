import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BlackButton from '../../components/BlackButton';
import { USERS } from "../../store/users";
import { useForm, Controller } from 'react-hook-form';
import { storeBooking } from '../../util/http';
import { useSelector } from 'react-redux';

export default function BookingScreen({ route, navigation }) {
  const worker = route.params.worker;

  const userId = useSelector((state) => state.loggedInUser.id);
  const activeUser = USERS.find((user) => user.id === userId);
  
  const today = new Date();

  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      address: '',
      landmarks: '',
      date: new Date(),
      time: new Date(),
      details: '',
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || getValues('date');
    setShowDatePicker(false);
    setValue('date', currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || getValues('time');
    setShowTimePicker(false);
    setValue('time', currentTime);
  };

  const onSubmit = data => {

    const formData = {
      workerId: worker.id,
      clientId: activeUser.id,
      address: data.address,
      landmarks: data.landmarks,
      details: data.details,
      date: data.date.toDateString(),
      time: data.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
      status: 0
    };
    console.log('Submitted Booking:', formData);
    storeBooking(formData);
    navigation.navigate("Pending");
    // TODO: handle submission logic / api integration
  };

  return (
    <ScrollView style={styles.scrollViewContent}>
      <View style={styles.container}>

        <Text style={styles.label}>Complete Address</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              numberOfLines={4}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              textAlignVertical={Platform.OS === 'android' ? 'top' : 'auto'}
            />
          )}
          name="address"
        />
        {errors.address && <Text style={styles.errorText}>The complete address is required.</Text>}

        <Text style={styles.label}>Landmarks</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
            />
          )}
          name="landmarks"
        />

        <Text style={styles.label}>Date of Appointment</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                placeholder="Select Date"
                value={value ? value.toDateString() : ''}
                editable={false}
                style={styles.input}
              />
            )}
            name="date"
          />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={getValues('date')}
            mode="date"
            display="default"
            onChange={onDateChange}
            minimumDate={today}
          />
        )}

        <Text style={styles.label}>Time of Appointment</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                placeholder="Select Time"
                value={value ? value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : ''}
                editable={false}
                style={styles.input}
              />
            )}
            name="time"
          />
        </TouchableOpacity>

        {showTimePicker && (
          <DateTimePicker
            value={getValues('time')}
            mode="time"
            display="default"
            onChange={onTimeChange}
            is24Hour={false}
          />
        )}

        <Text style={styles.label}>Additional Details</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="broken pipes, aircon cleaning, etc."
              placeholderTextColor="#ccc"
              multiline
              numberOfLines={4}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              textAlignVertical={Platform.OS === 'android' ? 'top' : 'auto'}
            />
          )}
          name="details"
        />

        <BlackButton onClick={handleSubmit(onSubmit)}>SUBMIT BOOKING</BlackButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    marginTop: -15,
  },
});
