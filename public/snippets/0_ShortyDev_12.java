    public String getRandomTextString(int length) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < length; i++) {
            char c = (char) (nextInt(26) + 'a');
            if (nextBoolean())
                c = Character.toUpperCase(c);
            builder.append(c);
        }
        return builder.toString();
    }