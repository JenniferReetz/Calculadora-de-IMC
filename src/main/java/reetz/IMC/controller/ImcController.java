package reetz.IMC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reetz.IMC.model.ImcRequest;
import reetz.IMC.model.ImcResponse;
import reetz.IMC.service.ImcService;

@RestController
@RequestMapping("/imc")
public class ImcController {
    @Autowired
    private ImcService imcService;

    @PostMapping("/calcular")
    public ImcResponse calcular(@RequestBody ImcRequest request) {
        return imcService.calcularImc(request);
    }
}
