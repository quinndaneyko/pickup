package sotifc2017.pickup.fragments;

import android.app.DatePickerDialog;
import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.text.InputType;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.InputMethodManager;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.RelativeLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.appyvet.materialrangebar.RangeBar;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.location.places.AutocompleteFilter;
import com.google.android.gms.location.places.Place;
import com.google.android.gms.location.places.ui.PlaceAutocompleteFragment;
import com.google.android.gms.location.places.ui.PlaceSelectionListener;
import com.google.android.gms.maps.model.LatLng;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import sotifc2017.pickup.R;
import sotifc2017.pickup.api.contracts.GetSearchRequest;
import sotifc2017.pickup.fragment_interfaces.OnFragmentReplacement;
import sotifc2017.pickup.fragment_interfaces.SearchFragment;

/**
 * Created by Abode on 3/3/2018.
 */

public class SearchGamesFragment extends Fragment implements SearchFragment {

    // Filters Section
    ImageButton filterToggleButton;
    RelativeLayout filterChildSection;

    CheckBox casualGameCheck;
    CheckBox seriousGameCheck;
    RangeBar minPlayerSeekBar;
    TextView minPlayerText;
    TextView skillRangeText;
    RangeBar skillRange;

    // Game details section
    ImageButton detailsToggleButton;
    RelativeLayout detailsChildSection;
    Calendar fromCalendar;
    Calendar toCalendar;
    final String dateFormat = "MM/dd/yy";
    EditText dateRangeText;
    DatePickerDialog.OnDateSetListener dateListenerFrom = new DatePickerDialog.OnDateSetListener() {

        @Override
        public void onDateSet(DatePicker view, int year, int monthOfYear,
                              int dayOfMonth) {
            fromCalendar.set(Calendar.YEAR, year);
            fromCalendar.set(Calendar.MONTH, monthOfYear);
            fromCalendar.set(Calendar.DAY_OF_MONTH, dayOfMonth);

            long minDate = System.currentTimeMillis() > fromCalendar.getTimeInMillis()? System.currentTimeMillis() : fromCalendar.getTimeInMillis();

            DatePickerDialog dateToDatePicker = new DatePickerDialog(getActivity(), dateListenerTo, toCalendar
                    .get(Calendar.YEAR), toCalendar.get(Calendar.MONTH),
                    toCalendar.get(Calendar.DAY_OF_MONTH));

            dateToDatePicker .getDatePicker().setMinDate(minDate);
            dateToDatePicker.setMessage(getString(R.string.game_search_date_range_end_message));

            dateToDatePicker.show();
        }

    };
    DatePickerDialog.OnDateSetListener dateListenerTo = new DatePickerDialog.OnDateSetListener() {

        @Override
        public void onDateSet(DatePicker view, int year, int monthOfYear,
                              int dayOfMonth) {

            toCalendar.set(Calendar.YEAR, year);
            toCalendar.set(Calendar.MONTH, monthOfYear);
            toCalendar.set(Calendar.DAY_OF_MONTH, dayOfMonth);

            updateDateRangeLabel(fromCalendar.getTime(), toCalendar.getTime());
        }

    };
    PlaceAutocompleteFragment placesFragment;
    double cityLat;
    double cityLng;
    Spinner location_range_spinner;

    //Game specifics section
    ImageButton specificsToggleButton;
    RelativeLayout specificsChildSection;
    CheckBox gameNameCheckbox;
    EditText gameNameEdittext;
    CheckBox gameIdCheckbox;
    EditText gameIdEdittext;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        return inflater.inflate(R.layout.fragment_search_games, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        //region Filters section
        casualGameCheck = view.findViewById(R.id.casualGameTypeCheckBox);
        seriousGameCheck = view.findViewById(R.id.seriousGameTypeCheckBox);

        minPlayerSeekBar = view.findViewById(R.id.min_players_seekbar);
        minPlayerText = view.findViewById(R.id.minimum_players_label);
        minPlayerText.setText(String.format(getString(R.string.game_search_minimum_player_message), 20));

        skillRange = view.findViewById(R.id.skill_seekBar);
        skillRangeText = view.findViewById(R.id.skill_level_label);
        skillRangeText.setText(String.format(getString(R.string.game_search_skill_range), 1, 10));


        filterToggleButton = view.findViewById(R.id.filters_header_toggle);
        filterChildSection = view.findViewById(R.id.filters_child_section);

        filterToggleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (filterChildSection.isShown()) {
                    filterToggleButton.setImageDrawable(ContextCompat.getDrawable(getActivity(), R.drawable.ic_expand_more_black_24dp));
                    filterChildSection.animate().translationY(-1 * filterChildSection.getHeight()).setDuration(300).alpha(0.0f).withEndAction(new Runnable() {
                        @Override
                        public void run() {
                            filterChildSection.setVisibility(View.GONE);
                        }
                    });
                }
                else {
                    filterToggleButton.setImageDrawable(ContextCompat.getDrawable(getActivity(), R.drawable.ic_expand_less_black_24dp));
                    filterChildSection.animate().translationY(0).setDuration(300).alpha(1.0f).withStartAction(new Runnable() {
                        @Override
                        public void run() {
                            filterChildSection.setVisibility(View.VISIBLE);
                        }
                    });
                }
            }
        });

        seriousGameCheck.setOnCheckedChangeListener(new CheckBox.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean seriousGameChecked) {
                updateGameTypeCheckboxes();
            }
        });

        casualGameCheck.setOnCheckedChangeListener(new CheckBox.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean casualGameChecked) {
                updateGameTypeCheckboxes();
            }
        });

        minPlayerSeekBar.setOnRangeBarChangeListener(new RangeBar.OnRangeBarChangeListener() {
            @Override
            public void onRangeChangeListener(RangeBar rangeBar, int leftPinIndex,
                                              int rightPinIndex, String leftPinValue, String rightPinValue) {
                minPlayerText.setText(String.format(getString(R.string.game_search_minimum_player_message), Integer.parseInt(rightPinValue)));
            }
        });

        skillRange.setOnRangeBarChangeListener(new RangeBar.OnRangeBarChangeListener() {
            @Override
            public void onRangeChangeListener(RangeBar rangeBar, int leftPinIndex,
                                              int rightPinIndex, String leftPinValue, String rightPinValue) {
                skillRangeText.setText(String.format(getString(R.string.game_search_skill_range), Integer.parseInt(leftPinValue), Integer.parseInt(rightPinValue)));
            }

        });
        //endregion

        //region game details section
        detailsChildSection = view.findViewById(R.id.details_child_section);
        detailsToggleButton = view.findViewById(R.id.details_header_toggle);
        dateRangeText = view.findViewById(R.id.date_range_from);
        dateRangeText.setInputType(InputType.TYPE_NULL);

        location_range_spinner = view.findViewById(R.id.location_range_spinner);

        detailsToggleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (detailsChildSection.isShown()) {
                    detailsToggleButton.setImageDrawable(ContextCompat.getDrawable(getActivity(), R.drawable.ic_expand_more_black_24dp));
                    detailsChildSection.animate().translationY(-1 * detailsChildSection.getHeight()).setDuration(300).alpha(0.0f).withEndAction(new Runnable() {
                        @Override
                        public void run() {
                            detailsChildSection.setVisibility(View.GONE);
                        }
                    });
                }
                else {
                    detailsToggleButton.setImageDrawable(ContextCompat.getDrawable(getActivity(), R.drawable.ic_expand_less_black_24dp));
                    detailsChildSection.animate().translationY(0).setDuration(300).alpha(1.0f).withStartAction(new Runnable() {
                        @Override
                        public void run() {
                            detailsChildSection.setVisibility(View.VISIBLE);
                        }
                    });
                }
            }
        });

        fromCalendar = Calendar.getInstance();
        toCalendar = Calendar.getInstance();

        View.OnClickListener onDateClick = new View.OnClickListener() {
        //  Could/should  possibly change this to one date picker, that triggers another, that way
        // we have one field for the range of dates
            @Override
            public void onClick(View v) {
                long minDate  = System.currentTimeMillis();

                DatePickerDialog dateFromDatePicker = new DatePickerDialog(getActivity(), dateListenerFrom, fromCalendar
                        .get(Calendar.YEAR), fromCalendar.get(Calendar.MONTH),
                        fromCalendar.get(Calendar.DAY_OF_MONTH));

                dateFromDatePicker.getDatePicker().setMinDate(minDate);

                dateFromDatePicker.setMessage(getString(R.string.game_search_date_range_start_message));
                dateFromDatePicker.show();
            }
        };

        dateRangeText.setOnClickListener(onDateClick);
        // Set default date for search (1 week = 1000ms*60s*60min*24hr*7days = 604800000)
        updateDateRangeLabel(new Date(System.currentTimeMillis()), new Date(System.currentTimeMillis() + 604800000));

        placesFragment= (PlaceAutocompleteFragment)
                getChildFragmentManager().findFragmentById(R.id.game_search_city_select);

        final AutocompleteFilter typeFilter = new AutocompleteFilter.Builder()
                .setTypeFilter(AutocompleteFilter.TYPE_FILTER_CITIES)
                .build();

        placesFragment.setFilter(typeFilter);

        EditText locationView = placesFragment.getView().findViewById(R.id.place_autocomplete_search_input);
        locationView.setHintTextColor(-1);
        //TODO: Replace default text with actual city user is in, remove hint
        locationView.setHint("Select City");
        locationView.setTextColor(-1);

        placesFragment.setOnPlaceSelectedListener(new PlaceSelectionListener() {
            @Override
            public void onPlaceSelected(Place place) {
                cityLat = place.getLatLng().latitude;
                cityLng = place.getLatLng().longitude;
            }

            @Override
            public void onError(Status status) {
                Log.e("search", "An error occurred: " + status);
            }
        });

        //endregion


        //region game specifics section
        specificsChildSection = view.findViewById(R.id.specifics_child_section);
        specificsToggleButton = view.findViewById(R.id.specifics_header_toggle);
        gameNameCheckbox = view.findViewById(R.id.game_name_checkbox);
        gameNameEdittext = view.findViewById(R.id.game_name_edittext);
        gameIdCheckbox = view.findViewById(R.id.game_id_checkbox);
        gameIdEdittext = view.findViewById(R.id.game_id_edittext);


        specificsToggleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (specificsChildSection.isShown()) {
                    specificsToggleButton.setImageDrawable(ContextCompat.getDrawable(getActivity(), R.drawable.ic_expand_more_black_24dp));
                    specificsChildSection.animate().translationY(-1 * specificsChildSection.getHeight()).setDuration(300).alpha(0.0f).withEndAction(new Runnable() {
                        @Override
                        public void run() {
                            specificsChildSection.setVisibility(View.GONE);
                        }
                    });
                }
                else {
                    specificsToggleButton.setImageDrawable(ContextCompat.getDrawable(getActivity(), R.drawable.ic_expand_less_black_24dp));
                    specificsChildSection.animate().translationY(0).setDuration(300).alpha(1.0f).withStartAction(new Runnable() {
                        @Override
                        public void run() {
                            specificsChildSection.setVisibility(View.VISIBLE);
                        }
                    });
                }
            }
        });

        gameNameCheckbox.setOnCheckedChangeListener(new CheckBox.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean searchByGameName) {
                gameNameEdittext.setFocusableInTouchMode(searchByGameName);
                gameNameEdittext.setEnabled(searchByGameName);
                if(searchByGameName){
                    gameNameEdittext.requestFocus();
                    gameNameEdittext.selectAll();
                    InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
                    imm.toggleSoftInput(InputMethodManager.SHOW_FORCED, 0);
                }
            }
        });


        gameIdCheckbox.setOnCheckedChangeListener(new CheckBox.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean searchByGameId) {
                gameIdEdittext.setFocusableInTouchMode(searchByGameId);
                gameIdEdittext.setEnabled(searchByGameId);
                if(searchByGameId){
                    Toast.makeText(getActivity(), getString(R.string.search_games_specifics_game_id_tooltip), Toast.LENGTH_SHORT).show();
                    gameIdEdittext.requestFocus();
                    gameIdEdittext.selectAll();
                    InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
                    imm.toggleSoftInput(InputMethodManager.SHOW_FORCED, 0);
                }
            }
        });


        //endregion
        super.onViewCreated(view, savedInstanceState);
    }

    private void updateDateRangeLabel(Date startDate, Date endDate) {
        SimpleDateFormat sdf = new SimpleDateFormat(dateFormat, Locale.US);

        dateRangeText.setText(String.format(getString(R.string.game_search_date_range_display_text_label),sdf.format(startDate),sdf.format(endDate)));
    }

    private void updateGameTypeCheckboxes(){
        if(!casualGameCheck.isChecked() && !seriousGameCheck.isChecked()){
            casualGameCheck.setChecked(true);
            seriousGameCheck.setChecked(true);
        }
        skillRange.setEnabled(seriousGameCheck.isChecked());
    }

    @Override
    public GetSearchRequest constructSearchRequest(String jwt) {
        int gameId = gameIdCheckbox.isEnabled() && gameIdCheckbox.isChecked() &&
                    !gameIdEdittext.getText().toString().trim().isEmpty() ?
                        Integer.parseInt(gameIdEdittext.getText().toString().trim()) : -1;
        if(gameId > 0) {
            return GetSearchRequest.CreateGameRequest(jwt, gameId);
        }
        else{
            String game_name = gameNameCheckbox.isEnabled() && gameNameCheckbox.isChecked() &&
                               !gameNameEdittext.getText().toString().trim().isEmpty() ?
                                    gameNameEdittext.getText().toString().trim() : null;

            GetSearchRequest.GAME_TYPE game_type = casualGameCheck.isChecked() ?
                    seriousGameCheck.isChecked() ?
                            GetSearchRequest.GAME_TYPE.both : GetSearchRequest.GAME_TYPE.casual
                    : seriousGameCheck.isChecked() ?
                            GetSearchRequest.GAME_TYPE.serious : GetSearchRequest.GAME_TYPE.both;


            int  game_skill_min = seriousGameCheck.isChecked() && skillRange.isEnabled() ? Integer.parseInt(skillRange.getLeftPinValue()) : -1;
            int  game_skill_max = seriousGameCheck.isChecked() && skillRange.isEnabled() ? Integer.parseInt(skillRange.getRightPinValue()) : -1;

            int game_total_players = Integer.parseInt(minPlayerSeekBar.getLeftPinValue());
            long game_start_time = fromCalendar.getTimeInMillis();
            long game_end_time = toCalendar.getTimeInMillis();

            Map<String, Double> game_location = new HashMap<String, Double>();
            game_location.put("lat", cityLat);
            game_location.put("lng", cityLng);
            int game_location_range = Integer.parseInt(location_range_spinner.getSelectedItem().toString().replace("KM", "").trim());

            return GetSearchRequest.CreateGameRequest
                    (jwt, game_name, game_type, game_skill_min, game_skill_max, game_total_players, game_start_time, game_end_time, game_location, game_location_range);
        }
    }
}