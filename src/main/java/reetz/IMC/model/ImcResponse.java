package reetz.IMC.model;

public class ImcResponse {
    private double imc;
    private String classificacao;

    public ImcResponse(double imc, String classificacao) {
        this.imc = imc;
        this.classificacao = classificacao;
    }

    // Getters
    public double getImc() {
        return imc;
    }

    public String getClassificacao() {
        return classificacao;
    }
}
