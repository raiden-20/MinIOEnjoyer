package ru.vsu.cs.minioenjoyer.configuration;


import io.minio.BucketExistsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.SetBucketPolicyArgs;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MinIOConfiguration {

    @Bean
    public MinioClient minioClient() throws Exception {
        MinioClient minioClient = MinioClient.builder()
                .endpoint("http://127.0.0.1:9000")
                .credentials("muser", "mpassword")
                .build();

        createBucket(minioClient);

        return minioClient;
    }

    private void createBucket(MinioClient minioClient) throws Exception {
        if (!minioClient.bucketExists(BucketExistsArgs.builder().bucket(MinioBucket.PICTURE.toString()).build())) {
            minioClient.makeBucket(MakeBucketArgs
                    .builder()
                    .bucket(MinioBucket.PICTURE.toString())
                    .build());
        }
    }
}
