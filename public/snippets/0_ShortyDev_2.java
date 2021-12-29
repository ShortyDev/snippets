    public int countOccurrence(String s, String search) {
        int count = 0;
        int pos = 0;
        while ((pos = s.indexOf(search, pos)) != -1) {
            pos += search.length();
            count++;
        }
        return count;
    }