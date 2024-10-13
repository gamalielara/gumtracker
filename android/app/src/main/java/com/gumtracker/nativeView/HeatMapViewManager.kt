package com.gumtracker.nativeView

import android.view.View
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class HeatMapViewManager(reactContext: ReactApplicationContext) : SimpleViewManager<View>() {
    override fun getName(): String = "NativeHeatMap"
    override fun createViewInstance(context: ThemedReactContext): View = createHeatMapView(context)
}