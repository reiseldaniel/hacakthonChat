package com.react_native_navigation_bootstrap;

import android.support.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.magus.fblogin.FacebookLoginPackage;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    new FacebookLoginPackage()
    // Add the packages you require here.
    // No need to add RnnPackage and MainReactPackage
    return null;
  }

}
