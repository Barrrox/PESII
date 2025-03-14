// import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// Inicializando o supabase
// https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native#create-a-project

// Chaves encontradas em https://supabase.com/dashboard/project/nghpaupbjxggkgxpgmed
const supabaseUrl = 'https://nghpaupbjxggkgxpgmed.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5naHBhdXBianhnZ2tneHBnbWVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMDUzMTcsImV4cCI6MjA1NDY4MTMxN30.UFx076arWmPBQu6F6hb19mj-88xz2akydW_z-pf2A2g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)