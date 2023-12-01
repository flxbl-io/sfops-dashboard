
if [ ! -f _data/packageVisualisation/data.js ]; then
    echo "packageVisualisation/data.js not found, skipping"
    exit 0
fi

cp _data/packageVisualisation/data.js packageVisualisation/data.js