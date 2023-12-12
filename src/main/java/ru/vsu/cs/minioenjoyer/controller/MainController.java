package ru.vsu.cs.minioenjoyer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.vsu.cs.minioenjoyer.service.MinIOConnection;

import java.io.InputStream;

@RestController
@RequiredArgsConstructor
public class MainController {

    private final MinIOConnection minIOConnection;

    @PostMapping("/api/file/send")
    @CrossOrigin
    public ResponseEntity<?> saveFile(@RequestParam("file") MultipartFile file) {
        String url = minIOConnection.saveFile(file);
        return ResponseEntity.ok(url);
    }
}
