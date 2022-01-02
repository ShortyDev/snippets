public abstract class ListedCache<K, V> {

    private final Map<K, V> cache = new HashMap<>();

    public Optional<V> get(K reference) {
        return Optional.ofNullable(cache.get(reference));
    }

    public V get(K reference, V fallback) {
        return cache.getOrDefault(reference, fallback);
    }

    public void put(K reference, V value) {
        cache.put(reference, value);
    }

    public void remove(K reference) {
        cache.remove(reference);
    }

    public void clear() {
        cache.clear();
    }

    public int size() {
        return cache.size();
    }

    public boolean isEmpty() {
        return cache.isEmpty();
    }

}
