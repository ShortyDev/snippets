public abstract class CoolDown<R> {

    private final Map<R, Long> map;

    protected CoolDown() {
        this.map = new HashMap<>();
    }

    public boolean isCooldown(R reference) {
        return map.getOrDefault(reference, 0L) - System.currentTimeMillis() > 0;
    }

    public void apply(R reference, long cooldown) {
        map.put(reference, System.currentTimeMillis() + cooldown);
    }

}
