    public static String[] merge(String[] main, String... extra) {
        return Stream.of(main, extra)
                .flatMap(Stream::of)
                .toArray(String[]::new);
    }