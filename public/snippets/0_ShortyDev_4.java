    public static String join(String delimiter, Object... objects) {
        return Arrays.stream(objects).map(String::valueOf).collect(Collectors.joining(delimiter));
    }