package ru.vsu.cs.minioenjoyer.configuration;

public enum MinioBucket {
    PICTURE("picture");

    private String name;

    MinioBucket(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return name;
    }
}
