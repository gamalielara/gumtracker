package com.gumtracker.nativeView

import android.view.View
import androidx.compose.ui.platform.ComposeView
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class HeatMapViewManager(reactContext: ReactApplicationContext) : SimpleViewManager<View>() {
    private var dates: Map<String, Double> = emptyMap()

    override fun getName(): String = "NativeHeatMap"

    override fun createViewInstance(context: ThemedReactContext): View {
        return ComposeView(context).apply {
            setContent { HeatMap(dates) }
        }
    }

    @ReactProp(name = "data")
    fun setData(view: ComposeView, datesProp: ReadableMap) {
        dates = datesProp.toHashMap().mapValues { it.value as Double }

        view.setContent {
            HeatMap(dates = dates)
        }
    }
}