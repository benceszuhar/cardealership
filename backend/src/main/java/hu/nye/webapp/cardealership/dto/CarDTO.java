package hu.nye.webapp.cardealership.dto;

import java.util.Calendar;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class CarDTO {
    

    @NotBlank
    private String rendszam;

    @NotBlank
    private String marka;

    @NotBlank
    private String tipus;

    @NotBlank
    @Min(value = 1886)
    @Max(value = Calendar.YEAR)
    private int evjarat;

    @NotBlank
    @Min(value = 0)
    @Max(value = 10000)
    private int motorterfogat;

    @NotBlank
    private String uzemanyagfajta;

    @NotBlank
    @Min(value = 0)
    @Max(value = 1000000)
    private int km_allas;

    @NotBlank
    private String szin;

    @Min(value = 0)
    private int ar;

    public CarDTO() {
    }


    public CarDTO(String rendszam, String marka, String tipus, int evjarat, int motorterfogat, String uzemanyagfajta, int km_allas, String szin, int ar) {
        this.rendszam = rendszam;
        this.marka = marka;
        this.tipus = tipus;
        this.evjarat = evjarat;
        this.motorterfogat = motorterfogat;
        this.uzemanyagfajta = uzemanyagfajta;
        this.km_allas = km_allas;
        this.szin = szin;
        this.ar = ar;
    }

    public String getRendszam() {
        return rendszam;
    }

    public void setRendszam(String rendszam) {
        this.rendszam = rendszam;
    }

    public String getMarka() {
        return marka;
    }

    public void setMarka(String marka) {
        this.marka = marka;
    }

    public String getTipus() {
        return tipus;
    }

    public void setTipus(String tipus) {
        this.tipus = tipus;
    }

    public int getEvjarat() {
        return evjarat;
    }

    public void setEvjarat(int evjarat) {
        this.evjarat = evjarat;
    }

    public int getMotorterfogat() {
        return motorterfogat;
    }

    public void setMotorterfogat(int motorterfogat) {
        this.motorterfogat = motorterfogat;
    }

    public String getUzemanyagfajta() {
        return uzemanyagfajta;
    }

    public void setUzemanyagfajta(String uzemanyagfajta) {
        this.uzemanyagfajta = uzemanyagfajta;
    }

    public int getKm_allas() {
        return km_allas;
    }

    public void setKm_allas(int km_allas) {
        this.km_allas = km_allas;
    }

    public String getSzin() {
        return szin;
    }

    public void setSzin(String szin) {
        this.szin = szin;
    }

    public int getAr() {
        return ar;
    }

    public void setAr(int ar) {
        this.ar = ar;
    }
    

}