<?php
foreach (glob('data/*.php') as $filename) {
  //TODO: Could be done in a cleaner way.
  $moduleName = str_replace('data/','',$filename);
  $moduleName = str_replace('.php','',$moduleName);
  
  echo '<div id="' . $moduleName . '" style="display:none;" class="overthetop">' . "\n";
  include($filename);
  echo "\n" . '</div>' . "\n";
    
}
?>
