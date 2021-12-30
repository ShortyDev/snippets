    public BlockVector rotateAroundY(BlockVector blockVector, int angle) {
        double rad = Math.toRadians(angle);
        double cos = Math.cos(rad);
        double sin = Math.sin(rad);
        int x = (int) Math.round(blockVector.getBlockX() * cos - blockVector.getBlockZ() * sin);
        int z = (int) Math.round(blockVector.getBlockX() * sin + blockVector.getBlockZ() * cos);
        return new BlockVector(x, blockVector.getBlockY(), z);
    }