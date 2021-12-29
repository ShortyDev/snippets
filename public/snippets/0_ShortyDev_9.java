    public static String getPublicAddress() throws IOException {
        URL url = new URL("https://www.ifconfig.me/");
        Scanner sc = new Scanner(url.openStream());
        StringBuilder stringBuilder = new StringBuilder();
        while (sc.hasNext())
            stringBuilder.append(sc.next());
        return stringBuilder.toString();
    }