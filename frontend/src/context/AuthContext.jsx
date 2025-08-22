import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { API_BASE_URL } from '../config.js'

const AuthContext = createContext({ user:null, authenticated:false, refresh:()=>{}, login:async()=>{}, logout:async()=>{} })

export function AuthProvider({ children }){
	const [user, setUser] = useState(null)

	const refresh = useCallback(async ()=>{
		try{
			console.log('Refreshing user data...')
			const res = await fetch(`${API_BASE_URL}/me`, { credentials:'include' })
			const data = await res.json()
			console.log('Refresh response:', data)
			if(res.ok && data.authenticated){ 
				console.log('Setting user:', data.user)
				setUser(data.user) 
			} else { 
				console.log('No authenticated user')
				setUser(null) 
			}
		}catch(err){ 
			console.error('Refresh error:', err)
			setUser(null) 
		}
	}, [])

	useEffect(()=>{ refresh() }, [refresh])

	const login = useCallback(async (username, password)=>{
		console.log('Login attempt for:', username)
		const res = await fetch(`${API_BASE_URL}/login`, { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body: JSON.stringify({ username, password }), credentials:'include' })
		const contentType = res.headers.get('content-type') || ''
		console.log('Login response status:', res.status, 'content-type:', contentType)
		if(contentType.includes('application/json')){
			const data = await res.json()
			console.log('Login response data:', data)
			if(!res.ok || data.error) throw new Error(data.error || `HTTP ${res.status}`)
		} else if(!res.ok){
			const text = await res.text(); throw new Error(text || `HTTP ${res.status}`)
		}
		console.log('Login successful, refreshing user data...')
		await refresh(); 
		return true
	}, [refresh])

	const logout = useCallback(async ()=>{
		await fetch(`${API_BASE_URL}/logout`, { credentials:'include' }); await refresh()
	}, [refresh])

	return (
		<AuthContext.Provider value={{ user, authenticated: !!user, refresh, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth(){ return useContext(AuthContext) }


