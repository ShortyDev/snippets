    private static final String ALPHANUMERIC = "abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    public String getRandomAlphanumericString(int length) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < length; i++)
            builder.append(ALPHANUMERIC.charAt(nextInt(ALPHANUMERIC.length())));
        return builder.toString();
    }