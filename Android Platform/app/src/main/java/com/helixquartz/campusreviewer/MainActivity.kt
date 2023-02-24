package com.helixquartz.campusreviewer

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.Spinner
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val filterOps= resources.getStringArray(R.array.filterOptions)  //calling the string array for filter
        val spinnerAdapter = object : ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, filterOps) {

            override fun isEnabled(position: Int): Boolean {
                // Disable the first item from Spinner
                // First item will be used for hint
                return position != 0
            }

            override fun getDropDownView(
                position: Int,
                convertView: View?,
                parent: ViewGroup
            ): View {
                val view: TextView = super.getDropDownView(position, convertView, parent) as TextView
                //set the color of first item in the drop down list to gray
                if(position == 0) {
                    view.setTextColor(Color.GRAY)
                } else {
                    //here it is possible to define color for other items by
                    //view.setTextColor(Color.RED)
                }
                return view
            }
        }

        spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        val mySpinner = findViewById<Spinner>(R.id.filter)
        mySpinner.adapter = spinnerAdapter
    }


}