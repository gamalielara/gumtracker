package com.gumtracker.util

sealed class Screen(val route: String) {
    object Login : Screen("login_screen")
    object Overview : Screen("overview_screen")
}