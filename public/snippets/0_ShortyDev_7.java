    public static String[] skip(String[] strings, int skip) {
        return Stream.of(strings)
                .skip(skip)
                .toArray(String[]::new);
    }