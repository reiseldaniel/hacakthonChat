package com.react_native_navigation_bootstrap;

import android.support.annotation.NonNull;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.reactnativenavigation.NavigationApplication;
import java.util.List;
import  java.util.Arrays;

import static com.facebook.FacebookSdk.getApplicationContext;

public class MainApplication extends NavigationApplication {


  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
//      new MainReactPackage();

      return Arrays.<ReactPackage>asList(
              new FacebookLoginPackage()
      );
  }

}
