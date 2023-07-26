import { Image, TouchableOpacity, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import theme from '../../styles/theme';

// const color = '#5391f5';
const color = theme.colors.primary;

const UploadFile = ({ type, image, file, onPress, onCancel }: UploadFileProps) => {
  const isImageAvailable = Boolean(image?.source);
  const isFileAvailable = Boolean(file?.source);

  return (
    <TouchableOpacity onPress={onPress} >
      <View
        style={{
          borderWidth: 2,
          borderColor: color,
          borderStyle: 'dashed',
          borderRadius: 8,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Upload UI */}
        <View style={{ alignItems: 'center', display: (isImageAvailable || isFileAvailable) ? 'none' : undefined }}>
          <IconButton icon={'plus'} mode='outlined' iconColor={color} style={{ borderColor: color, borderWidth: 2 }} />
          <Text variant='bodyMedium' style={{ color: color }} >Upload {type}</Text>
        </View>
        {/* Image Preview */}
        {image?.source && (
          <>
            <Image source={{ uri: image.source }} style={{ height: '75%', aspectRatio: 1 }} />
            <Text variant='bodySmall'>{image.name}</Text>
          </>
        )}
        {file?.source && (
          <>
            <IconButton icon={'file-pdf-o'} size={50} iconColor={theme.colors.primary} />
            <Text variant='bodySmall' style={{ width: '100%', textAlign: 'center' }}>{file.name}</Text>
          </>
        )}
        <IconButton
          icon={'close'}
          iconColor={theme.colors.backdrop}
          size={18}
          onPress={onCancel}
          style={{ position: 'absolute', top: 0, right: 0, margin: 0, display: (isImageAvailable || isFileAvailable) ? undefined : 'none' }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default UploadFile;