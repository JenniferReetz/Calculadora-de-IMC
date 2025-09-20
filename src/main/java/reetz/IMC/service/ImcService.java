package reetz.IMC.service;

import org.springframework.stereotype.Service;
import reetz.IMC.model.ImcRequest;
import reetz.IMC.model.ImcResponse;

@Service
public class ImcService {
    public ImcResponse calcularImc(ImcRequest request) {
        double imc = request.getPeso() / Math.pow(request.getAltura(), 2);
        String classificacao = classificarImc(imc);

        return new ImcResponse(imc, classificacao);
    }

    private String classificarImc(double imc) {
        if (imc < 18.5) return "Abaixo do peso";
        else if (imc < 24.9) return "Peso normal";
        else if (imc < 29.9) return "Sobrepeso";
        else if (imc < 34.9) return "Obesidade Grau I";
        else if (imc < 39.9) return "Obesidade Grau II";
        else return "Obesidade Grau III";
    }
}
