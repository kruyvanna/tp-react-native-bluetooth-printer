require "json"

Pod::Spec.new do |s|
    package = JSON.parse(File.read(File.join(__dir__, "package.json")))
    s.name = "RNBluetoothEscposPrinter"
    s.version = package["version"]
    s.summary = package["description"]
    s.author = 'harrybui'
    s.homepage = 'https://github.com/harrybui2804/tp-react-native-bluetooth-printer';
    s.license = package["license"]
    s.platform = :ios, "9.0"
    s.source = { :git => "https://github.com/harrybui2804/tp-react-native-bluetooth-printer", :tag => "#{s.version}" }
    s.source_files = "ios/**/*.{h,m}"
    s.dependency "React"
end
