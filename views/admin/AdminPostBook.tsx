import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';
import { Button, TextInput, Text } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import UploadFile from '../../components/common/UploadFile';
import trimFileName from '../../utils/trimFileName';

const INIT_IMAGE = {
  source: '',
  name: ''
};

const INIT_FILE = {
  source: '',
  name: ''
};

const AdminPostBook = () => {
  const [image, setImage] = useState(INIT_IMAGE);
  const [file, setFile] = useState(INIT_FILE);

  const uploadPhoto = async () => {
    try {
      const photo: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
        multiple: false
      });
      if(photo.type === 'success') {
        setImage({
          source: photo.uri,
          name: trimFileName(photo.name)
        });
      }
      if(photo.type === 'cancel') {
        setImage(INIT_FILE);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
      console.log(error.response);
    }
  };

  const cancelPhoto = () => setImage(INIT_FILE);

  const uploadPdf = async () => {
    try {
      const doc: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: false
      });
      if(doc.type === 'success') {
        setFile({
          source: doc.uri,
          name: trimFileName(doc.name)
        });
      }
      if(doc.type === 'cancel') {
        setFile(INIT_FILE);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
      console.log(error.response);
    }
  };

  const cancelPdf = () => setFile(INIT_FILE);

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          padding: 6,
          paddingHorizontal: 12
        }}
      >
        <View
          style={{ gap: 6 }}
        >
          <Text variant='headlineSmall' style={{ alignSelf: 'center' }}>Masukkan Detail Buku</Text>
          <TextInput
            mode='outlined'
            label={'Judul Buku'}
          />
          <TextInput
            mode='outlined'
            label={'Penulis'}
          />
          <TextInput
            mode='outlined'
            label={'Penerbit'}
          />
          <TextInput
            mode='outlined'
            label={'Tahun Terbit'}
          />
          <TextInput
            mode='outlined'
            label={'Kategori'}
          />
          <TextInput
            mode='outlined'
            label={'Jumlah Halaman'}
          />
          <TextInput
            mode='outlined'
            label={'Deskripsi'}
            multiline={true}
          />
          <TextInput
            mode='outlined'
            label={'Bahasa'}
          />
          <Text variant='bodyMedium'>Cover Buku</Text>
          <UploadFile type='image' onPress={uploadPhoto} image={image} onCancel={cancelPhoto} />
          <Text variant='bodyMedium'>Ebook PDF</Text>
          <UploadFile type='file' onPress={uploadPdf} file={file} onCancel={cancelPdf} />
          <Button mode='contained' onPress={() => alert('Uploaded!')} >
            Upload
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AdminPostBook;