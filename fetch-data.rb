#!/usr/bin/env ruby
require 'json'
require 'pp'
require 'bundler/inline'
gemfile do
	source 'https://rubygems.org'
    gem 'httparty'
    gem 'byebug'
end
require 'byebug'

SYMBOLS = ["AAPL", "AXP", "BA", "CAT", "CSCO", "CVX", "DD", "DIS", "GE", "GS", "HD", "IBM", "INTC", "JNJ", "JPM", "KO", "MCD", "MMM", "MRK", "MSFT", "NKE", "PFE", "PG", "TRV", "UNH", "UTX", "V", "VZ", "WMT", "XOM"]

DESTINATION_FILE = File.join(__dir__, 'dist', 'stock_data.json')

class TickerData
    API_ENDPOINT_HOST = 'https://www.quandl.com'
    API_ENDPOINT_PATH = '/api/v3/datatables/SHARADAR/SF1.json'
    QUANDL_API_KEY = '-JuketAYn-cNXiDioYKb'
    include HTTParty
    format :json
    base_uri API_ENDPOINT_HOST
    default_params api_key: QUANDL_API_KEY

    def fetch(symbol)
        resp = self.class.get(API_ENDPOINT_PATH, query: { ticker: symbol })
        unless resp.ok? 
            puts "Error in response for #{symbol}: #{resp.inspect}"
            return false
        end
        resp.parsed_response
    rescue Exception => e
        puts e
        return false
    end
end

fetcher = TickerData.new
STOCK_DATA = {}
SYMBOLS.each do |symbol|
    puts "Fetching data for #{symbol}..."
    STOCK_DATA[symbol] = fetcher.fetch(symbol)
    puts "Fetch complete"
    sleep 2
end

File.write(DESTINATION_FILE, STOCK_DATA.to_json)