package ru.vsu.cs.minioenjoyer.service;

import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.vsu.cs.minioenjoyer.configuration.MinioBucket;

@Service
@RequiredArgsConstructor
public class MinIOConnection {

    private final MinioClient minioClient;

    public String saveFile(MultipartFile file){
        try {
            minioClient.putObject(PutObjectArgs
                    .builder()
                    .bucket(MinioBucket.PICTURE.toString())
                    .object(file.getOriginalFilename())
                    .stream(file.getInputStream(), file.getSize(), 5 * 1024 * 1024)
                    .build());
            return "http://127.0.0.1:9000/" + MinioBucket.PICTURE.toString() + "/" + file.getOriginalFilename();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}
