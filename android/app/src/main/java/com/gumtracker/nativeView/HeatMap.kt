package com.gumtracker.nativeView

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
@Preview
fun HeatMap() {
    val daysInAYear = 365
    val tileRows = 7 // Days in a week
    val columns = daysInAYear / tileRows
    val cellSize = 16
    val cellSizeDp = cellSize.dp
    val paddingSize = 4
    val paddingSizeDp = paddingSize.dp
    val scrollState = rememberScrollState()

    val boxPadding = 10.dp


    Box(
        modifier = Modifier
            .padding(horizontal = 10.dp)
            .clip(RoundedCornerShape(10.dp))
    ) {
        Box(
            modifier = Modifier
                .background(Color(0xFF96B6C5))
                .horizontalScroll(scrollState)
                .width((columns * (cellSize + paddingSize)).dp + boxPadding * 2)
                .height((tileRows * (cellSize + paddingSize)).dp + boxPadding * 2)
                .padding(all = boxPadding)

        ) {
            Canvas(
                modifier = Modifier
                    .fillMaxSize()
            ) {
                for (day in 0 until daysInAYear) {
                    val row = day % tileRows
                    val col = day / tileRows

                    val paddingX = paddingSizeDp.toPx()
                    val paddingY = paddingSizeDp.toPx()

                    val x = col * (cellSizeDp.toPx() + paddingX)
                    val y = row * (cellSizeDp.toPx() + paddingY)


                    drawOval(
                        color = Color.White,
                        topLeft = Offset(x, y),
                        size = Size(cellSizeDp.toPx(), cellSizeDp.toPx())
                    )
                }

            }
        }
    }
}